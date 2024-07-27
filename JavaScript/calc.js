const buttomnE1 = document.querySelectorAll('button');

const inputFeildE1 = document.querySelectorID('result');

for(let i = 0 ; i < buttomnE1.length; i++)
{
    buttomnE1[i].addEventListener('click',  () => {
        const buttonValue = buttomnE1[i].textContent;
        if(buttonValue === 'C')
        {
            clearResult();
        }
        else if(buttonValue === '=')
        {
            calculateResult();
        }
        else
        {
            appendValue(buttonValue);
        }
    });
}
function appendValue(buttonValue)
{
    inputFeildE1.value += buttonValue;
}
function clearResult()
{
    inputFeildE1.value = '';
}
function calculateResult()
{
    inputFeildE1.value = eval(inputFeildE1.value);
}