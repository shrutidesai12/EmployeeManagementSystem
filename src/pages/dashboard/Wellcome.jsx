import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import BannerSection from "../../components/DashboardComponents/welcomecomponent/BannerSection";
import IntroduceYourself from "../../components/DashboardComponents/welcomecomponent/TaskCard";
import OnboardingTasks from "../../components/DashboardComponents/welcomecomponent/OnboardingTasks";
import QuickLinks from "../../components/DashboardComponents/welcomecomponent/QuickLinks";
import ExploreKeka from "../../components/DashboardComponents/welcomecomponent/ExploreKeka";



export default function WelcomeTab() {
  return (
    <div className="space-y-6">

      <BannerSection />
       <IntroduceYourself />
       <OnboardingTasks />
       <QuickLinks />
       <ExploreKeka />


    </div>
  )
}