import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import FloatingCircles from "./component/floatingCircles";
import Navigation from "./route";
import store, { persistor } from "./store/store";
import { checkAuthentication } from "./store/action/auth-action";
import Loader from "./component/Loader";

const AppContent = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthentication());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 flex items-center justify-center relative overflow-hidden">
      <FloatingCircles
        color="bg-sky-900"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingCircles
        color="bg-cyan-700"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <Navigation />
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" />
      <PersistGate loading={<Loader />} persistor={persistor}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
};

export default App;
