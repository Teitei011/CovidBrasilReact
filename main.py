import pandas as pd
import time
import os

PATH = "brazil/"
FILE_NAME = "Brazil.csv"

tempo_inicial = time.time()

def extractDataframeByName(dataframe, location):
    print("Processing... 0%")
    all_names = dataframe[location].unique().tolist()

    number_of_names = len(all_names)
    counter = 0

    for name in all_names:
        counter += 1
        if (counter % 530 == 0):
            print("Processing... {:.0f}% ".format(
                (counter*100)/number_of_names))

        newDataframe = dataframe.loc[dataframe[location] == name]
        newDataframe.drop(newDataframe.index[0])
        newDataframe.to_json(f"{PATH}/{name}.json")


def divideByTwoWhenPossible(array):
    for i in range(len(array)):
        try:
            array[i] = array[i] / 2
        except:
            pass
    return array


def changeDateOrder(array):
    newArray = []
    for date in array:
        buffer = date.split("-")
        print(buffer)
        newArray.append(buffer[2] + "-" + buffer[1] + "-" + buffer[0])
    return newArray


# Regiao pro Brasil né? # Estado tem que dividr por 2
def splitDataframe2Something(dataframe, name):
    dataframe['data'] = [str(dataframe.data[i]).replace("/", "-")
                         for i in range(len(dataframe))]
    if (name == "estado"):
        newDataframe = dataframe.groupby([name, "data"])[
            ['casosAcumulado', 'casosNovos', 'obitosAcumulado', 'obitosNovos']].sum().apply(lambda x: divideByTwoWhenPossible(x))
    elif (name == "Brasil"):
        dataframe = dataframe.loc[dataframe["regiao"] == "Brasil"]
        newDataframe = dataframe[["data", "casosAcumulado",
                                  "casosNovos", "obitosAcumulado", "obitosNovos"]].copy()

    else:  # Municipios
        newDataframe = dataframe.groupby([name, "data"])[
            ['casosAcumulado', 'casosNovos', 'obitosAcumulado', 'obitosNovos']].sum()

    newDataframe.reset_index(inplace=True)
    newDataframe["data"] = newDataframe["data"]
    newDataframe["daily_cases_moving average"] = newDataframe['casosNovos'].rolling(
        window=7).mean()
    newDataframe["daily_deaths_moving average"] = newDataframe['obitosNovos'].rolling(
        window=7).mean()
    newDataframe["sum_of_daily_cases_week"] = newDataframe['casosNovos'].rolling(
        window=7).sum()
    newDataframe["sum_of_daily_deaths_week"] = newDataframe['obitosNovos'].rolling(
        window=7).sum()

    return newDataframe


def main():

    # def pre_processing_csv_data(file_name):
    unprocessedDataset = pd.read_csv(
        str(FILE_NAME), delimiter=";", error_bad_lines=False)

    cities = splitDataframe2Something(unprocessedDataset, "municipio")
    states = splitDataframe2Something(unprocessedDataset, "estado")
#     print(states)

    brazil = splitDataframe2Something(unprocessedDataset, "Brasil")
    brazil.to_json(f"{PATH}/Brasil.json")

    extractDataframeByName(cities, "municipio")
    extractDataframeByName(states, "estado")

    print("It took {:.2f} minutes".format((time.time() - tempo_inicial)/60))


if __name__ == "__main__":
    main()