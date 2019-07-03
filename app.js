const courseInput = document.querySelector("#input-course");
const ratingInput = document.querySelector("#input-rating");
const btnAdd = document.querySelector("#btn-add");
const ratingList = document.querySelector("#rating-list");
const alertCtrl = document.querySelector('ion-alert-controller');
let total = 0;


btnAdd.addEventListener("click", () => {
    const enteredCourse = courseInput.value;
    const enteredRating = ratingInput.value;
    console.log("Entered reason", enteredCourse);
    console.log("Entered amount", enteredRating);

    if (enteredCourse.trim().length <= 0 ||
        enteredRating.trim().length <= 0 ||
        enteredRating <= 0 ||
        enteredRating > 5) {
            alertCtrl.create({
                header: 'Invalid inputs',
                message: 'Please enter a valid course name or rating [1-5].',
                buttons: ['OK']  
            }).then(alert => {
                alert.present();
            });
        return;
    }

    console.log("Valid input");

    const newItem = document.createElement('ion-item');

    newItem.innerHTML = '<b>'+enteredCourse+'</b>' + '  -  ' + enteredRating + '/5';

    ratingList.appendChild(newItem);

});