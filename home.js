
          var api_data = {};
          var apihit = document.getElementById("apihit");
          apihit.addEventListener("click",function(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => apiHit(json))
           });

           apiHit = apidata =>{api_data = apidata;
            displayTable(apidata);
               }

               searchApiData =  event => {
                 var temparr = api_data.filter(function(e){
                            return e.name.toUpperCase().match(event.target.value.toUpperCase()) ||e.email.toUpperCase().match(event.target.value.toUpperCase())||e.address.street.toUpperCase().match(event.target.value.toUpperCase())||e.website.toUpperCase().match(event.target.value.toUpperCase());
                         });
                         displayTable(temparr);
                        console.log(temparr);
                }

                displayTable = apidata =>{
                    document.getElementById("tbody").innerHTML = "";
                    apidata.map((item,index)=>{
                        const TR = document.createElement("TR");
                        TR.innerHTML = `<td>${item.id}</td>
                                        <td>${item.name}</td>
                                        <td>${item.email}</td>
                                        <td>${item.address.street}</td>
                                        <td>${item.website}</td>`;
                        document.getElementById("tbody").appendChild(TR);  
                    });
                }
       
            inc =(event)=>{
             let sortApi = this.api_data;
             console.log(event)
             sortApi.sort(function(a, b){return event.target.value == '1' ? a.id - b.id : b.id - a.id});
             displayTable(sortApi);
            }