

import { Routes, Route } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChooseBirdPage from "./pages/ChooseBirdPage";
import BirdRevealPage from "./pages/BirdRevealPage";
import BirdNamePage from "./pages/BirdNamePage";
import StrugglesPage from "./pages/StrugglesPage";
import GoalCountPage from "./pages/GoalCountPage";
import GoalsPage from "./pages/GoalsPage";
import OnboardingCompletePage from "./pages/OnboardingCompletePage";
import NotificationsPage from "./pages/NotificationsPage";
import ProfilePage from "./pages/ProfilePage";
import EditBirdPage from "./pages/EditBirdPage";
import HealthPage from "./pages/HealthPage";
import HealthDataPage from "./pages/HealthDataPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/choose-bird" element={<ChooseBirdPage />} />
      <Route path="/bird-reveal/:bird" element={<BirdRevealPage />} />
      <Route path="/bird-name/:bird" element={<BirdNamePage />} />
      <Route path="/struggles/:bird" element={<StrugglesPage />} />
      <Route path="/goal-count/:bird" element={<GoalCountPage />} />
      <Route path="/goals/:bird" element={<GoalsPage />} />
      <Route path="/onboarding-complete/:bird" element={<OnboardingCompletePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/edit-bird" element={<EditBirdPage />} />
      <Route path="/health" element={<HealthPage />} />
      <Route path="/health-data" element={<HealthDataPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
