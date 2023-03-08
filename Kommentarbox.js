function addComment() {
    // Holen Sie sich den Text des Kommentarfelds
    var commentText = document.getElementById("comment-input").value;
  
    // Erstellen Sie ein neues Listenelement und fügen Sie es der Liste hinzu
    var commentContainer = document.getElementById("comment-container");
    var newComment = document.createElement("div");
    newComment.className="comment";
    var commentNode = document.createTextNode(commentText);
    newComment.appendChild(commentNode);
    commentContainer.appendChild(newComment);
    
  
    // Löschen Sie den Inhalt des Kommentarfelds
    document.getElementById("comment-input").value = "";
  }
  