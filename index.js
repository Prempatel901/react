

const react = {
    createElement: function(tag,styles,children){
        const element = document.createElement(tag);
        element.innerText = children;
        if(typeof children ==="object"){
            for(let val of children)
                element.append(val)
        }
        else
        for(let key in styles)
        {
            element.style[key] = styles[key]
            console.log(styles[key])
        }
        return element;
    }
}


const reactDom = {
    render:function(element,root){
        root.append(element)
    }
}



const header1 = react.createElement("h1",{fontSize:"40px",backgroundColor:"gray",color:"orange"},"hello prem")
const header2 = react.createElement("h2",{},"hello vasu kaise ho aap")
const header3 = react.createElement("h1",{},"this is my beginning")

const li1 = react.createElement("li",{},"HTML")
const li2 = react.createElement("li",{},"CSS")
const li3 = react.createElement("li",{},"JS")

const Ul = react.createElement("ul",{backgroundColor:"blue"},[li1,li2,li3])


reactDom.render(header1,document.getElementById("root"))
reactDom.render(header2,document.getElementById("root"))
reactDom.render(header3,document.getElementById("root"))
reactDom.render(Ul,document.getElementById("root"))