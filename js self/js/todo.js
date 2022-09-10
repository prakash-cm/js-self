// showNotes();

// // If user adds a note, add it to the localStorage
// let addBtn = document.getElementById("addBtn");
// addBtn.addEventListener("click", function(e) {
// 	let addTxt = document.getElementById("addTxt");
// 	let notes = localStorage.getItem("notes");

// 	if (notes == null) notesObj = [];
// 	else notesObj = JSON.parse(notes);

// 	notesObj.push(addTxt.value);
// 	localStorage.setItem("notes", JSON.stringify(notesObj));
// 	addTxt.value = "";

// 	showNotes();
// });

// // Function to show elements from localStorage
// function showNotes() {
// 	let notes = localStorage.getItem("notes");

// 	if (notes == null) notesObj = [];
// 	else notesObj = JSON.parse(notes);

// 	let html = "";

// 	notesObj.forEach(function(element, index) {
// 		html += `<div class="noteCard my-2 mx-2 card"
// 			style="width: 18rem;">
// 				<div class="card-body">
// 					<h5 class="card-title">
// 						Note ${index + 1}
// 					</h5>
// 					<p class="card-text">
// 						${element}
// 					</p>

// 				<button id="${index}" onclick=
// 					"deleteNote(this.id)"
// 					class="btn btn-primary">
// 					Delete Note
// 				</button>
// 			</div>
// 		</div>`;
// 	});

// 	let notesElm = document.getElementById("notes");

// 	if (notesObj.length != 0) notesElm.innerHTML = html;
// 	else
// 		notesElm.innerHTML = `Nothing to show!
// 		Use "Add a Note" section above to add notes.`;
// }

// // Function to delete a note
// function deleteNote(index) {
// 	let notes = localStorage.getItem("notes");

// 	if (notes == null) notesObj = [];
// 	else notesObj = JSON.parse(notes);

// 	notesObj.splice(index, 1);

// 	localStorage.setItem("notes",
// 		JSON.stringify(notesObj));

// 	showNotes();
// }




window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
