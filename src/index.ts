import { format } from "path";
import {
    Joff,
    Jaime,
    Daenerys,
    Tyrion,
    Bronn,
    theGang,
    characterSheet,
    fillChSheet,
} from "./app.js";

theGang.forEach((char) => fillChSheet(char));
