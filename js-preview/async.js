// จำลองการรับข้อมูลจาก server
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
    console.log("1) Start Loading...");
    await wait(2000);
    console.log("2) Complete");
    // await getUsers();
    await getPost();
}

//
async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const post = await response.json();
        console.log(`Get Data ${post.length}`);
        post.forEach((p) => {
            console.log(`UserID : ${p.userId}`);
            console.log(`ID : ${p.id}`);
            console.log(`TITLE : ${p.title}`);
            console.log(`Body : ${p.body}`);
            console.log(`---------------------------------------------`)
        });
    } catch (error) {
        console.error("Error Found :", error.message);
    }
}

demo();
console.log("3) Show Data");