function Img(props){
    function imgFun(img){
        if(img != null){
            return(
                <>
                    <img src={img}></img>
                </>
            )
        } else {
            console.log('naa')
        }
    }
    return(
        <>
            {imgFun(props.img)}
        </>
    )
}
export default Img