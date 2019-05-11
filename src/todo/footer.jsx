import '../assets/styles/footer.styl'

export default {
    data(){
        return{
            author: 'binsombinsombinsombinsombinsombinsombinsombinsom'
        }
    },
    render(){
        return (
            <div id="footer">
                <span>Written by Written by{this.author}</span>
            </div>
        )
    }
}