Hooks.once("init", () => {
  //adding new skills
  CONFIG.DND5E.skills.arc = {
    label: "Psionics",
    ability: "int",
    fullKey: "psionics",
    icon: "",
  };

  CONFIG.DND5E.skills.veh = {
    label: "Vehicle Handling",
    ability: "dex",
    fullKey: "vehicle handling",
    icon: "",
  };

  CONFIG.DND5E.skills.mec = {
    label: "Mechanical Engineering",
    ability: "int",
    fullKey: "mechanical engineering",
    icon: "",
  };

  CONFIG.DND5E.skills.sft = {
    label: "Software Engineering",
    ability: "int",
    fullKey: "software engineering",
    icon: "",
  };
});
