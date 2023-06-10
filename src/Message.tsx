/*Two ways to create a React component, we can use 
JS class or function now function based components are defined
become a standard as they are consice*/
//PascalCasing

//React component
function Message() {
    //JSX: Javascript XML syntax - Allows us to create dynamic content
    const name = 'Bharat';
    return <h1>Namaste {name}</h1>;
}
//Exporting this as a default object
export default Message;