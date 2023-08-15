const expand = document.querySelectorAll('.container__card');

expand.forEach(card => {
    card.addEventListener("click", () => {
        contract();
        card.classList.add("container__card--principal")
    })
});

const contract = () => {
    expand.forEach(card=>{
        card.classList.remove("container__card--principal")
})
};