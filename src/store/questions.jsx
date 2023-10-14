import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    questions : [
        {"question" : "Do I Have To Allow The Use Of Cookies?","answer" : "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
        {"question" : "How Do I Change My My Page Password?","answer" : "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
        {"question" : "What Is BankID?","answer" : "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
        {"question" : "Whose Birth Number Can I Use?","answer" : "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
        {"question" : "When Do I Recieve A Password Ordered By Letter?","answer" : "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."},
    ]
}

const questions = createSlice({
    name:"questions",
    initialState,
    reducers : {}
})

export default questions.reducer
