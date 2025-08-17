import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
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
    <div className="min-h-screen">
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
