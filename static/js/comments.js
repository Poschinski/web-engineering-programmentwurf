const messageEle = document.getElementById("commentInput");
const counterEle = document.getElementById("character-count");

/**
 * event listener to count the number of characters in the textarea
 */
messageEle.addEventListener("input", function (e) {
  const target = e.target;

  // Get the `maxlength` attribute
  const maxLength = target.getAttribute("maxlength");

  // Count the current number of characters
  const currentLength = target.value.length;

  counterEle.innerHTML = `${currentLength}/${maxLength}`;
});

document.getElementById("urlInput").value = window.location.href;
