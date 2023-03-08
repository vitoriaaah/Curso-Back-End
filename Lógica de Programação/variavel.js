var principal = [];
    var max = 60;
    
    for(j=0;j<6;j++){
    //Sorteia o número;
    var atual = Math.floor(Math.random()*max+1);
    //compara o atual com os dados já existentes.
    //comparando um a um:
    for(i=0;i<principal.length;i++){
         //se for igual, sorteia novo e zera contagem 
        //(No primeiro número i=principal, ou seja, acrescenta ao vetor diretamente.)
      if(atual===principal[i]){atual = Math.floor(Math.random()*max+1);i=-1;}
        //Se não for igual passa ao próximo (i++)	
        }
        
    //Não encontrou correspondência, acrescenta o valor ao vetor... 
    principal[i]=atual;
    //...e passa a próxima posição (j++)
    }
    
    //...colocando em ordem crescente   
    principal = principal.sort(function(a, b){return a-b});