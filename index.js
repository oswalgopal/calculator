        var num = [0,0,0,0,0,0,0,0,0,0,0,0] ; 
        var num2 = 0;
        var count = 0;
        var cmd_var = 0 ; 
        var a=0;
        var ans = 0;
        function click_fun(a){
            num[count] = num[count] *10 + a;
            document.getElementById('number').value = num[count];
        }

        function clear_all(){
            document.getElementById('number').value = 0;
            num = 0;
            count=0;
        }
        function remove_one(){
            a= document.getElementById('number').value;
            a = a/10;
            a =parseInt(a);
            document.getElementById('number').value = a;
        }

        function add(){
            document.getElementById('number').value = 0;
            cmd_var = '+';
            count= count+1 ;
        }

        function mul(){
            document.getElementById('number').value = 0;
            cmd_var = '*';
            count= count+1 ;
        }

        function sub(){
            document.getElementById('number').value = 0;
            cmd_var = '-';
            count= count+1 ;
        }

        function div(){
            document.getElementById('number').value = 0;
            cmd_var = '/';
            count= count+1 ;
        }
        function mod(){
            document.getElementById('number').value = 0;
            cmd_var = '%';
            count= count+1 ;
        }

        function sum(){
            if(cmd_var == '+'){
                ans=   num[0] + num[1] ;
                document.getElementById('number').value = ans;
            }
            else if(cmd_var == '*'){
                ans=   num[0] * num[1] ;
                document.getElementById('number').value = ans;
            }
            else if(cmd_var == '-'){
                ans=   num[0] - num[1] ;
                document.getElementById('number').value = ans;
            }
            else if(cmd_var == '/'){
                ans =   num[0] / num[1] ;
                document.getElementById('number').value = ans;
            }
            else if(cmd_var == '%'){
                ans =   num[0] % num[1] ;
                document.getElementById('number').value = ans;
            }
        }





    