//1-root = document(order1),
const root1 = document.querySelector('[data-key="order1"]')
console.dir(root1)

// const 1-biscuits: document(biscuits),
// const biscuits1 = document.querySelector('[class="biscuits"]')
const biscuits1 = root1.querySelector('[class="biscuits"]')
console.dir(biscuits1)

// const 1-donuts: document(donuts)
//const donuts1 = document.querySelector('[class="donuts"]')
const donuts1 = document.querySelector('[class="donuts"]')
console.dir(donuts1)

// const 1-pancakes: document(pancakes)
const pancakes1 = root1.querySelector('[class="pancakes"]')
console.dir(pancakes1)

// const 1-status: document(status)
// const status1 = document.querySelector('[class="status"]')
const status1 = root1.parentElement.querySelector('[class="status"]')
console.dir(status1)

// const 2-root = document(order2),
const root2 = document.querySelector('[data-key="order2"]')
console.dir(root2)

// const 2-biscuits: document(biscuits),
const biscuits2 = root2.querySelector('[class="biscuits"]')
console.dir(biscuits1)

// const 2-donuts: document(donuts),
const donuts2 = root2.querySelector('[class="donuts"]')
console.dir(donuts2)

// const 2-pancakes: document(pancakes),
const pancakes2 = root2.querySelector('[class="pancakes"]')
console.dir(pancakes2)

// const 2-status: document(status)
const status2 = root2.parentElement.querySelector('[class="status"]')
console.dir(status2)

// const 3-root = document(order3),
const root3 = document.querySelector('[data-key="order3"]')
console.dir(root3)

// const 3-biscuits: document(biscuits),
const biscuits3 = root3.querySelector('[class="biscuits"]')
console.dir(biscuits3)

// const 3-donuts: document(donuts),
const donuts3 = root3.querySelector('[class="donuts"]')
console.dir(donuts3)

// const 3-pancakes: document(pancakes),
const pancakes3 = root3.querySelector('[class="pancakes"]')
console.dir(pancakes3.innerHTML)

// const 3-status: document(status)
const status3 = root3.parentElement.querySelector('[class="status"]')
console.dir(status3)


// 1-biscuits= 1-root.biscuits,
biscuits1.querySelector('[class="count"]').textContent = root1.dataset.biscuits
// 1-donuts = 1-root.donuts,
donuts1.querySelector('[class="count"]').textContent = root1.dataset.donuts
// 1-pancakes = 1-root.pancakes,
pancakes1.querySelector('[class="count"]').textContent = root1.dataset.pancakes
// 1-status = 1-root.status ? Delivered : Pending
status1.textContent = Boolean(root1.dataset.Delivered) ? "Delivered" : "Pending"

// 2-biscuits= 2-root.biscuits,
biscuits2.querySelector('[class="count"]').textContent = root2.dataset.biscuits
// 2-donuts = 2-root.donuts,
donuts2.querySelector('[class="count"]').textContent = root2.dataset.donuts
// 2-pancakes = 2-root.pancakes,
pancakes2.querySelector('[class="count"]').textContent = root2.dataset.pancakes
// 2-status = 2-root.status ? Delivered : Pending
status2.textContent = Boolean(root2.dataset.Delivered) ? "Delivered" : "Pending"

// 3-biscuits= 3-root.biscuits,
biscuits3.querySelector('[class="count"]').textContent = root3.dataset.biscuits
// 3-donuts = 3-root.donuts,
donuts3.querySelector('[class="count"]').textContent = root3.dataset.donuts
// 3-pancakes = 3-root.pancakes,
pancakes3.querySelector('[class="count"]').textContent = root3.dataset.pancakes
// 3-status = 3-root.status ? Delivered : Pending
status3.textContent = Boolean(root3.dataset.delivered) ? "Delivered" : "Pending"

// document(biscuits.p-count).pending = 3-status ? 1-biscuits + 2-biscuits + 3-biscuits: 0
document(biscuits.p-count).pending = 3-status ? biscuits1 + biscuits2 + biscuits3 : 0
// document(biscuits.p-count).delivered 3-status ? 0 : 1-biscuits + 2-biscuits + 3-biscuits
document(biscuits.p-count).delivered 3-status ? 0 : biscuits1 + biscuits2 + biscuits3

// document(donuts.p-count).pending = 3-status ? 1-donuts + 2-donuts + 3-donuts: 0
// document(donuts.p-count).delivered 3-status ? 0 : 1-donuts + 2-donuts + 3-donuts

// document(pancakes.p-count).pending = 3-status ? 1-pancakes+ 2-pancakes+ 3-pancakes: 0
// document(pancakes.p-count).delivered 3-status ? 0 : 1-pancakes+ 2-pancakes + 3-pancakes