import Card from "./components/Card.tsx";

export default function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
    </main>
  );
}