let zoomIn = document.querySelectorAll(".zoom-in");
let expand = document.getElementById("expand");
// console.log(zoomIn);
for (let i = 0; i < zoomIn.length; i++){
    zoomIn[i].addEventListener("click", () => {
        // console.log(zoomIn[i].outerHTML);
        expand.style.display = "flex";
        let imgdiv = document.createElement("div");
        let backdiv = document.createElement("div");
        imgdiv.innerHTML = zoomIn[i].outerHTML;
        imgdiv.classList.add("expand-img");
        let controldiv = document.createElement("div");
        let leftdiv = document.createElement("div");
        let rightdiv = document.createElement("div");
        controldiv.appendChild(leftdiv);
        controldiv.appendChild(rightdiv);
        controldiv.classList.add("control-div");
        expand.appendChild(imgdiv);
        expand.appendChild(controldiv);
        backdiv.innerHTML = `<img id="back" src="image/back.png">`;
        backdiv.classList.add("back-div");
        expand.appendChild(backdiv);
        let j = i;
        rightdiv.addEventListener("click", () => {
            j++;
            j = j % zoomIn.length;
            imgdiv.innerHTML = `${zoomIn[j].outerHTML}`;
        });
        leftdiv.addEventListener("click", () => {
            if (j == 0) {
                j = zoomIn.length - 1;
            } else {
                j--;
            }
            j = j % zoomIn.length;
            imgdiv.innerHTML = `${zoomIn[j].outerHTML}`
        });
        document.getElementById("back").addEventListener("click",()=>{
            expand.style.display = "none";
            imgdiv.style.display = "none";
            imgdiv.innerHTML = "";
            controldiv.style.display = "none";
            controldiv.innerHTML = "";
            backdiv.style.display = "none";
            backdiv.innerHTML = "";
        });
    });
}

// let detailWrapper = document.querySelectorAll('.detail-wrapper');
// detailWrapper.forEach((eachDetailWrapper, index) => {
//         eachDetailWrapper.addEventListener("mouseover", descriptionText);
//         function descriptionText(){
//             console.log(eachDetailWrapper, index);
//         }
//         eachDetailWrapper.addEventListener("mouseleave", () => {
//             eachDetailWrapper.removeEventListener("mouseover", descriptionText);
//         });
// });





