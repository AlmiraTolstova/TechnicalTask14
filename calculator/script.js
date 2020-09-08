var keys = document.querySelectorAll('#calculator span');
var operators = ['+','-','×','÷'];
var decimalAdded = false;

//Цикл по всем кнопкам калькулятора
for (var i = 0; i < keys.length; i++)
{
    //Для каждой кнопки калькулятора мы назначаем функцию -обработчик
    keys[i].onclick = function (e) 
    {
        //В переменную input кладем объект html <div class="screen"></div>
        var input = document.querySelector('.screen');
        //В переменную inputVal положим содержимое объекта screen
        var inputVal = input.innerHTML;
        //Переменная содержащая последнюю нажатую кнопку
        var btnVal = this.innerHTML;
        //Переменная куда попадает результат работы калькулятора
        var total;
        //Починка кнопки С
        if(btnVal =='C')
        {
            input.innerHTML='';
        }
        else
        //Если была нажата кнопка равно, то:
        if (btnVal == '=') 
        {
            var equation = inputVal;
            var lastChar = equation[equation. length - 1];

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/,'');

            if(equation) 
            {
                total = eval(equation);
                if(total.toString().indexOf('.') != -1)
                total = total.toFixed(2);

                input.innerHTML = total;
            }
            decimalAdded = false;
        }
        //Иначе если нажатая кнопка это  оператор из массива operators = ['+','-','×','÷'];то:
        else if (operators.indexOf(btnVal) > -1) {

            var lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
            input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
            input.innerHTML += btnVal;

            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;

        }
        //Иначе если введена точка, то:
        else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML +=btnVal;
                decimalAdded = true;
            }
        }

        else {
            input.innerHTML +=btnVal;
        }

        e.preventDefault();
    }
}