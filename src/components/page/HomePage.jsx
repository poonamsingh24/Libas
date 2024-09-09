import React from "react";
import { useAuth } from "../hooks/useAuth";
import Banner from "../Banner";
import Categories from "../Categories";
import HandPicker from "../HandPicker";
import DiscountList from "../DiscountList";
import Vedio from "../Vedio";
import PurpulEdit from "../PurpulEdit";
import FollowUs from "../FollowUs";

export default function HomePage() {
  const { currentUser } = useAuth();
  return (
    <div>
      <Banner />
      <Categories />
      <HandPicker />
      <DiscountList />
      <Vedio />
      <PurpulEdit />
      <FollowUs />
    </div>
  );
}
