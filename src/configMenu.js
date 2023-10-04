export const configMenu = {
    configColor: {
    background:'#f4f5fa', // Color de Fondo General de la botonera
    itemBackground: '#d0d0d0',// Color de Fondo de los subMenús
    itemColor:'#666', // Color del texto de cada item del menú
    itemActive:'#a8a8a8', // Color cuando hace click y se abre un submenú
    },
    idFirstNivel : 150,
    menuItems : [
    {name:'Another Action', isFolder:false, id:148, idPadre:150},
    {name:'sub menu', isFolder:true, id:2, idPadre:150},
    {name:'Action', isFolder:false, id:3, idPadre:2},
    
    {name:'Another action', isFolder:false, id:4, idPadre:2},
    {name:'sub menu', isFolder:true, id:5, idPadre:2},
    {name:'Another action', isFolder:false, id:55, idPadre:5},
    {name:'something else here', isFolder:false, id:56, idPadre:5},
    ],
}