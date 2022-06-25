function createRow(event){
    event.preventDefault();
    //create a element
    let first_name=document.getElementById("fn").value;
    let last_name=document.getElementById("ln").value;
    let age=document.getElementById("age").value;
    let gender;
    let sports=[];
    let p=document.getElementsByName("gender");
    for(let i=0;i<p.length;i++){
        if(p[i].checked){
            gender=p[i].value;
            break;
        }
    }
    p=document.getElementsByName("sports");
    for(let i=0;i<p.length;i++){
        if(p[i].checked){
            sports.push(p[i].value);
        }
    }
    console.log(first_name);
    console.log(last_name);
    console.log(age);
    console.log(gender);
    console.log(sports);
    //creating row
    let row=document.createElement('tr');
    let col1=document.createElement('td');
    col1.innerText=first_name;
    let col2=document.createElement('td');
    col2.innerText=last_name;
    let col3=document.createElement('td');
    col3.innerText=age;
    let col4=document.createElement('td');
    col4.innerText=gender;
    let col5=document.createElement('td');
    col5.innerText=sports.join(",");
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);
    document.querySelector("table").append(row);
    document.querySelector("form").reset();
}
