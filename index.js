// Define the chatbot's responses
const responses = {
  "hi": "Hello!",
  
  "how are you": "I'm doing well, thank you!",

  "what is your name": "My name is Chatbot.",

  "do you know yash": "Yes Yash Is a BCA Student", 
  
  "what you can do?":
  "I can answer your questions related to data structures and algoriths .",

 "name non linear data structure":"non linear data structures are MAP ,GRAPH , TREE",

  "name  non linear data graphs":"list , array , stack , queue",

  "what is size of dataset":"it is number of elements in a data structure",

  "how to define array in java ":" datatye[] arryaname = new datatype[mention size];",

  "can we make array in java without mention size ":"no,you cant ",

  "string is linear or non linear data structure in java ":"it is linear data structure ",

  "what is recursion":
    "recusion is a technique used to solve computer problems by creating a function that calls itself until your program achieves the desired result.",
    
  "what is a graph?":
    "A graph is a data structure that represents a set of objects (nodes) and their connections (edges)",

  "what is a dynamic array?":
    "A dynamic array is an array that can resize itself during runtime.",

  "what is a binary heap?":
    "A binary heap is a data structure that represents a complete binary tree, where the parent node is always smaller (or larger) than its children.",

  "what is a hash function?":
    "A hash function is a function that takes an input (key) and returns a unique index in a hash table where the corresponding value is stored.",

  "what is a depth-first search?":
    "Depth-first search is a graph traversal algorithm that explores the graph by visiting as far as possible along each branch before backtracking.",

  "what is a breadth-first search?":
    "Breadth-first search is a graph traversal algorithm that explores the graph by visiting all the neighbors at the present depth before moving on to the next level.",

  "what is a priority queue?":
    "A priority queue is a data structure that allows efficient access to the element with the highest (or lowest) priority.",

  "what is a stack?":
    "A stack is a data structure that follows the LIFO (Last-In-First-Out) principle and allows pushing and popping elements.",

  "what is a queue?":
    "A queue is a data structure that follows the FIFO (First-In-First-Out) principle and allows adding and removing elements.",

  "what is an array?":
    "An array is a data structure that stores a fixed-size sequential collection of elements of the same data type.",

  "what is a linked list?":
    "A linked list is a data structure that consists of a sequence of nodes, where each node contains a reference to the next node.",

  "what is a binary tree?":
    "A binary tree is a tree-like data structure where each node can have at most two children.",

  "what is a bubble sort?":
    "Bubble sort is a simple sorting algorithm that repeatedly compares adjacent elements and swaps them if they are in the wrong order.",

  "what is a linear search?":
    "Linear search is a search algorithm that checks each element in a sequence until the target element is found.",

  "what is a tree traversal?":
    "Tree traversal is a process of visiting each node in a tree in a specific order, such as in-order, pre-order, or post-order.",

  "what is a linear data structure?":
    "A linear data structure is a data structure where elements are arranged sequentially, such as arrays, linked lists, stacks, and queues",

    "name six sorting techniques":
    " bubble sort, insertion sort , selection sort , merge sort , quick sort , heap sort .",

  "what is a circular queue?":
    "A circular queue is a data structure that follows the FIFO principle, but the last element is connected to the first element to form a circle.",

  "what is an AVL tree?":
    "An AVL tree is a self-balancing binary search tree that guarantees logarithmic time complexity for insertion, deletion, and search operations.",

  "what is a doubly linked list?":
    "A doubly linked list is a linked list in which each node has a reference to both its previous and next nodes.",

  "what is a binary search?":
    "Binary search is a search algorithm that works on sorted arrays and halves the search range with each iteration.",
};

// Define a function to generate the chatbot's response
function generateResponse(message) {
  // Convert the message to lowercase and remove whitespace
  message = message.toLowerCase().trim();

  // If the message is "bye", return the "bye" response
  if (message === "bye") {
    return "Thank You";
  }

  // Check if the message is a known question
  if (responses.hasOwnProperty(message)) {
    return responses[message];
  }

  // If the message is not a known question and not "bye", return the default response
  return "I'm sorry, I didn't understand your message.";
}

// Get the DOM elements
const chatArea = document.querySelector(".chat-area");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Define a function to add a message to the chat area
function addMessage(message, sender) {
  const chatBox = document.createElement("div");
  chatBox.classList.add("chat-box");
  chatBox.classList.add(sender);

  const chatText = document.createElement("p");
  chatText.textContent = message;

  chatBox.appendChild(chatText);
  chatArea.appendChild(chatBox);

  // Scroll to the bottom of the chat area
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Define a function to handle user input
function handleUserInput() {
  // Get the user's message
  const message = userInput.value.trim();

  // Clear the input field
  userInput.value = "";

  // Add the user's message to the chat area
  addMessage(message, "user");

  // Generate the chatbot's response
  const response = generateResponse(message);

  // Add the chatbot's response to the chat area after a short delay
  setTimeout(() => {
    // If the user says "Bye", add the "thank you" message and terminate the program
    if (message.toLowerCase() === "bye") {
      addMessage(response, "bot");
      setTimeout(() => {
        addMessage(" Have a nice day!", "bot");
        setTimeout(() => {
          window.close();
        }, 1000);
      }, 500);
    } else {
      addMessage(response, "bot");
    }
  }, 500);
}

// Add an event listener to the send button
sendBtn.addEventListener("click", handleUserInput);

// Add an event listener to the input field to allow sending a message by pressing enter
userInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    handleUserInput();
  }
});
