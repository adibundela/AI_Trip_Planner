import { CloudCog } from "lucide-react";
import { Input } from "../components/ui/input";
import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  AI_PROMPT,
  selectBudgetOptions,
  SelectTravelersList,
} from "@/constants/options";
import { Button } from "../components/ui/button";
import { toast, Toaster } from "sonner";
import { chatSession } from "../service/AIModal";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";

function CreatTrip() {
  const [formdata, setFormdata] = useState([]);
  const [opendialog, setopendialog] = useState(false);
  const handleChange = (name, value) => {
    setFormdata({ ...formdata, [name]: value });
  };

  const login =useGoogleLogin({
    onSucceess:(resp)=>console.log(resp),
    onError:(err)=>console.log(err)
  })
  const OnGenrateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setopendialog(true);
      return;
    }

    if (
      (formdata?.noOfDays > 5 && !formdata?.place) ||
      !formdata?.budget ||
      !formdata?.traveler
    ) {
      toast("Please fill all details and make sure the noOfDays is maximum 5");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formdata.place)
      .replace("{total days}", formdata.noOfDays)
      .replace("{traveler}", formdata.traveler)
      .replace("{budget}", formdata.budget)
      .replace("{#}", formdata.noOfDays);

    console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
  };

  return (
    <div className="sm: px-10 md: px-32 lg: px-56 xl: px-10  px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us you travel prefrences 🌴🏕️</h2>
      <p className="mt-3 text-gray-500">
        Just provided some basic informations, and our trip planner will genrate
        a customized itinery based on your prefrences.
      </p>

      <div className=" mt-20 flex flex-col gap-2">
        <div>
          <h2 className="text-xl my-3 font-medium ">
            What is destination of choice?
          </h2>
          <Input
            placeholder={"Ex. mumbai"}
            name="place"
            type="text"
            onChange={(e) => handleChange("place", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium ">
            How many days are you planning?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            name="noOfDay"
            type="number"
            onChange={(e) => handleChange("noOfDays", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium ">What is your budget</h2>
          <div className="grid grid-cols-3 gap-5 mt-5 ">
            {selectBudgetOptions.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={(e) => handleChange("budget", item.title)}
                  className={`p-4 border rounded-lg hover:shadow-lg ${
                    formdata?.budget == item.title && "shadow-lg border-black"
                  }`}
                >
                  <h2 className="text-2xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium ">
            who do yo plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5 ">
            {SelectTravelersList.map((item, idx) => {
              return (
                <div
                  key={idx}
                  onClick={(e) => handleChange("traveler", item.people)}
                  className={`p-4 border rounded-lg hover:shadow-l g${
                    formdata?.traveler == item.people &&
                    "shadow-lg border-black"
                  } `}
                >
                  <h2 className="text-2xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                  <h2 className="text-xs">{item.people}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button onClick={(e) => OnGenrateTrip()}>Genrate Trip</Button>
      </div>

      <Dialog open={opendialog}>
        
        <DialogContent>
          <DialogHeader>
           
            <DialogDescription>
              <img src="/l.svg" alt=""  className="w-1/3" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to App with Google authentication security</p>

              <Button onClick={login} className="w-full mt-5 flex gap-4 items-center4 "><FcGoogle className="h-7 w-7"/>Sign In with Google</Button>
              
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatTrip;
