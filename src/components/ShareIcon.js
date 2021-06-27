export const ShareIcon = (WrapperIcon, WrapperButton, path) => {
    return (
    <div >
    <WrapperIcon
      url={path}
      className="Demo__some-network__share-button"
    >
      <WrapperButton  round={true} />
    </WrapperIcon>
  </div>)
}