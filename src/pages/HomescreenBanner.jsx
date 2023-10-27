import '../cssFiles/homesceen.css'

const HomepageBanner = () => {

    return (
        <>
            <div className="homepageBanner">
                <div className="bioCont">
                    <h2>
                        Hi! I'm Mimi Li
                    </h2>
                    <p>
                        Computer Science student at CUNY - Hunter College with a minor in Mathematics
                    </p>
                    <div className="linkContainer">
                        <div> About Me </div>
                        <div> Linked In </div>
                        <div> Github </div>
                    
                    </div>
                </div>
                <div className="bioCont heartCont">  
                    <div className="heart">
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomepageBanner