import React, { Component } from 'react'

class Usergreet extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedin: true
        }
    }

    render() {

        return this.state.isLoggedin && <div>Welcome Dutt</div>



        // return (
        //     this.state.isLoggedin ?
        //         <div>Welcome Dutt</div> :
        //         <div>Welcome Guest</div>

        // )





        // if (this.state.isLoggedin) {
        //     return <div>
        //         Welcome Dutt
        //     </div>
        // }
        // else {
        //     return <div>
        //         welcome Guest
        //     </div>
        // }

    }
}

export default Usergreet
