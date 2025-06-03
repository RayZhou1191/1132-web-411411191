function openiframe(index) {
  const c = document.getElementsByClassName('show-classdemo')[0];
  console.log(c);
  switch (index) {
    case 1:
      c.innerHTML =
        '<iframe src="../W02/HTML-work.html" frameborder="1"></iframe>';
      break;
    case 2:
      c.innerHTML = '<iframe src="../W03/Card.html" frameborder="1"></iframe>';
      break;
    case 3:
      c.innerHTML = '<iframe src="../W04/Blog.html" frameborder="1"></iframe>';
      break;
    case 4:
      c.innerHTML = '<iframe src="../W06/t3.html" frameborder="1"></iframe>';
      break;
  }
  console.log(index);
}
