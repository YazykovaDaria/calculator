import { configs } from "@data";

const materials = configs.filter((item) => item.type === "material");

export const getMaterialName = (name: string) => {
    const item = materials.find((item) => item.key === name);
    return item ? item.name : "";
};
