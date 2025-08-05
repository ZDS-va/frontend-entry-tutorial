function addRow() {
    var table=document.getElementById("table")
    var length=table.rows.length;
    var newRow=table.insertRow(length)
    var nameCol = newRow.insertCell(0)
    var numCol = newRow.insertCell(1)
    var actionCol = newRow.insertCell(2)

    nameCol.innerHTML = '未命名'
    numCol.innerHTML = '无'
    actionCol.innerHTML = '<button onclick="editRow(this)">编辑</button><button  onclick="deleteRow(this)">删除</button>'
}

function deleteRow(button){
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row)
}

function editRow(button){
     var row = button.parentNode.parentNode;
     var name = row.cells[0]
     var number = row.cells[1]
     
     var inputName= prompt("请输入名字： ")
     var inputNum= prompt("请输入手机号： ")

     if (inputName.length == 0 || inputNum.length ==0){
        return
     }
     name.innerHTML=inputName
     number.innerHTML=inputNum
}