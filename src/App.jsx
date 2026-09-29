import Card from "./components/Card.tsx";

export default function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 items-start">
      <Card 
        imgSrc= "/public/Currents.jpg" 
        title="Am I Bothering You?" 
        author="Reality Club" 
        desc="It tells the story of the doubts and anxiety someone feels when pursuing a crush or navigating the early stages of a new relationship."
      />
      <Card 
        imgSrc= "/public/Currents2.jpg" 
        title="Bitter Sweet Symphony" 
        author="The Verve" 
        desc="Bitter Sweet Symphony” is perhaps the most ambitious Britpop hit of the late 90s. It is now absolutely everywhere. It’s lyrically opaque, and it is six minutes long, but that hasn’t stopped it becoming an amazingly popular anthem."
      />
      <Card 
        imgSrc= "/public/Currents3.jpg" 
        title="No One Noticed" 
        author="The Marias" 
        desc="“No One Noticed” sees María being torn up by her lover, feeling unnoticed by him as she slowly reveals how she truly feels."
      />
      <Card 
        imgSrc= "/public/Currents4.jpg" 
        title="Under Pressure" 
        author="Queen and David Bowie" 
        desc="A duet about how the pressure on our lives makes us nearly crumble. The collaboration emerged from a hectic day of partying and composing by David Bowie and the four members of Queen."
      />
      <Card 
        imgSrc= "/public/Currents5.jpg" 
        title="happier" 
        author="Olivia Rodrigo" 
        desc="In “happier,” Olivia wishes the best for an ex-lover and their new relationship, but simultaneously hopes to remain a significant memory in their life."
      />
      <Card 
        imgSrc= "/public/Currents6.jpg" 
        title="I Love You, I'm Sorry" 
        author="Gracia Abrams" 
        desc="I had just made a plan to hang and talk with my ex-boyfriend, who I used to write lots of songs about. It had been, like, two years. Like, having never run into each other, you know, no real communication."
      />
      <Card 
        imgSrc= "/public/Currents7.jpg" 
        title="Beautiful Boy (Darling Boy)" 
        author="John Lennon" 
        desc="A lovely song John wrote for his son, Sean. It’s quite a lot like a lullaby, and he’s really just a father comforting his son."
      />
      <Card 
        imgSrc= "/public/Currents8.jpg" 
        title="Be My Baby" 
        author="The Ronettes" 
        desc="It tells the story of a girl who falls in love the moment she meets someone and wants her partner to be hers forever."
      />
    </main>
  );
}