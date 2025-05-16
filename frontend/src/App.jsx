import FloatingCircles from "./component/floatingCircles";
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-fuchsia-900 to to-purple-500 flex items-center justify-center relative overflow-hidden">
      <FloatingCircles
        color="bg-fuchsia-900"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingCircles
        color="bg-purple-900"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
    </div>
  );
};

export default App;
