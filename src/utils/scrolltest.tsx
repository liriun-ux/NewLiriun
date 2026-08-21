"use client";

export default function ScrollTest() {
  const handleClick = () => {
    console.log("HELLO WORLD");
  };

  return (
    <main>
      <h1>Scroll Test</h1>

      <button onClick={handleClick}>
        Test Console
      </button>
    </main>
  );
}
