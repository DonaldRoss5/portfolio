function Footer() {
  let year = new Date().getFullYear();
  return <p>&copy; {year} Donald Ross</p>;
}

export default Footer