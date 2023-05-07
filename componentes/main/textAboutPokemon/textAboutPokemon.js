async function getData(api){
    const data = await fetch(api).then(e=>e.json());return data
}
async function TextAbout(props){
    const specie = await getData(props.api.species.url)
    return(
        <div>
            {
                specie.flavor_text_entries.map(e=>{
                    if(e.language.name == 'en' && e.version.name == 'firered'){
                        return(
                            <p>
                                {e.flavor_text}
                            </p>
                        )
                    }
                })
            }
        </div>
    )
}
export default TextAbout