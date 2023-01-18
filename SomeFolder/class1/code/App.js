const heading1 = React.createElement('h1',{
    id:'1', 
    style:{ backgroundColor:'gray',border:'1px solid blue'}
},'Heading 1');

const heading2 = React.createElement('h2',{
    id:'2',
    style:{backgroundColor:'yellow', border:'2px solid red'}
},'Heading 2');

const container = React.createElement('div',{
    id :'container_div',
    
},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
