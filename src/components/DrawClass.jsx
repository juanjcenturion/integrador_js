import { Component } from "react";
import './DrawClass.css'


class DrawClass extends Component{
    render(){
        const {name, attributes, methods, borderColor, headColor, textColor} = this.props.data;
        const attributeText = attributes.map((attr, index) => (
            <tspan x="0" dy="30" key={index}>
                {attr}
            </tspan>
        ));
        const methodsText = methods.map((mths, index) => (
            <tspan x="0" dy="30" key={index}>
                {mths}
            </tspan>
        ));
        
        //Definir alturas
        const rectAttributeHeight = attributes.length > 1 ? attributes.length * 40 : 40; // 100 es el valor mínimo por defecto
        const rectMethodsHeight = methods.length > 1 ? methods.length * 40 : 40;// 40 es el valor mínimo por defecto
        const methodsTextY = rectAttributeHeight - 5 
        const totalHeight = rectAttributeHeight + rectMethodsHeight + 30

        const maxWordLength = Math.max(
            name.split(' ').reduce((max, word) => Math.max(max, word.length), 0),
            ...attributes.map(attr => attr.split(' ').reduce((max, word) => Math.max(max, word.length), 0)),
            ...methods.map(method => method.split(' ').reduce((max, word) => Math.max(max, word.length), 0))
        );
        
        // Define un ancho mínimo para tu componente
        const minWidth = 200;
        
        // Calcula el ancho del componente en función de la longitud máxima de palabras y el ancho mínimo
        const widthValue = Math.max(maxWordLength * 8, minWidth); // Puedes ajustar el multiplicador según sea necesario
        
        //Centrar titulo
        const centerX = widthValue / 2

        return (
            <div className="uml_class">
                <svg  width={widthValue} height={totalHeight} xmlns="http://www.w3.org/2000/svg" >
                {/* Rectangulo de fondo para el titulo de clase */}
                    <rect width={widthValue} height={30} fill={headColor}/>
                
                {/* Texto para el titulo de clase */}
                    <text x={centerX} y="20" fill={textColor} textAnchor="middle">
                        {name}
                    </text>
                {/* Rectangulo para atributos */}
                    <rect x="0" y="30" width={widthValue} height={rectAttributeHeight} fill="white" stroke={borderColor} />
                {/* Texto para los atributos */}
                    <text x="0" y="20" fill={textColor}>
                        {attributeText}
                    </text>
                {/* Rectangulo para metodos */}
                    <rect x="0" y={rectAttributeHeight} width={widthValue} height={rectMethodsHeight} fill="white" stroke={borderColor} />
                
                {/* Línea superior del rectángulo de métodos en negro */}
                    <line x1="0" y1={rectAttributeHeight} x2={widthValue} y2={rectAttributeHeight} stroke="black" strokeWidth="2" />

                {/* Texto para los metodos */}
                    <text x="0" y={methodsTextY} fill={textColor}>
                        {methodsText}
                    </text>  
                </svg>
            </div>
        )
    }
}

export default DrawClass