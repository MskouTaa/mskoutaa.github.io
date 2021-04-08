
function randomNum(){
    var randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('hhh').innerHTML = ("Your crush loves you " + randomNum + "%");
}
function clearHh() {
    document.getElementById('hhh').innerHTML = 'Calculate';
    document.getElementById('name').value = '';
    document.getElementById('crush').value = '';
}
function validateform(){
    var name = document.getElementById('name').value;  
    var crush = document.getElementById('crush').value;  
      
    if (name == null || name == ""){  
        document.getElementsByClassName('hide-n')[0].style.visibility = 'visible';  
      return false;  
    }else if(crush == null || crush == ""){  
        document.getElementsByClassName('hide-c')[0].style.visibility = 'visible'; 
      return false;  
    } else {
        randomNum();
        document.getElementsByClassName('hide-n')[0].style.visibility = 'hidden';
        document.getElementsByClassName('hide-c')[0].style.visibility = 'hidden';
    } 
}
function hideHh() {
    var x = document.getElementById('hideHh');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
    } else {
      x.style.visibility = 'hidden';
    }
}