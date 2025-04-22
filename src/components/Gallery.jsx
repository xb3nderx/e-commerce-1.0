function Gallery() {
  const images = [
    "https://loremflickr.com/320/240",
    "https://loremflickr.com/320/240",
    "https://loremflickr.com/320/240",
  ];

  return (
    <section
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Imagen ${index + 1}`}
          style={{ width: "150px", height: "150px" }}
        />
      ))}
    </section>
  );
}

export default Gallery;
