export default function Title() {
  interface Person {
    firstName: string;
    lastName: string;
    title: string;
  }
  return (
    <div className="flex flex-cols-2 space-y-6 items-start justify-center">
      <div className="flex flex-col pr-8 text-gray-500 items-end font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl pt-6">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
      </div>
      <div>
        {/* PERSON */}

        <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl">
          <span style={{ color: "#dcdcaa" }}>const</span>{" "}
          <span style={{ color: "#ce9178" }}>
            Person: <span style={{ color: "#800080" }}>PersonType</span>
          </span>
          {" = {"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            firstName
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Daniel</span>
          {'",'}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            lastName
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Johnson</span>
          {'",'}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>title</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Software Engineer</span>
          {'"'}
          <br />
          <span style={{ marginLeft: "" }}>{"};"}</span>
        </h1>
        {/* LANGUAGES */}
        <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl">
          <span style={{ color: "#dcdcaa" }}>let</span>{" "}
          <span style={{ color: "#ce9178" }}>
            Languages: <span style={{ color: "#800080" }}>LanguageType</span>
          </span>
          {" = {"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            TypeScript
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Experienced</span>
          {'",'}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Python</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Intermediate</span>
          {'",'}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Swift</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {' "'}
          <span style={{ color: "#cb4154" }}>Beginner</span>
          {'"'}
          <br />
          <span style={{ marginLeft: "" }}>{"};"}</span>
        </h1>
        {/* TOOLS */}
        <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl">
          <span style={{ color: "#dcdcaa" }}>let</span>{" "}
          <span style={{ color: "#ce9178" }}>
            Tools: <span style={{ color: "#800080" }}>ToolsType</span>
          </span>
          {" = {"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            Frameworks
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "React", "Next.js", "Express"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            StateManagement
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>"Jotai", "Zhustand", "Redux"</span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>
            Databases
          </span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>"SQL", "KV", "Vectors"</span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Other</span>
          <span style={{ color: "#d4d4d4" }}>:</span>{" "}
          <span style={{ color: "#007acc" }}>CanLearnInADay</span>
          <span style={{ color: "#d4d4d4" }}>(AllTools)</span>
          <br />
          <span style={{ marginLeft: "" }}>{"};"}</span>
        </h1>
        {/* HOBBIES */}
        <h1 className="font-source-code-pro text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl">
          <span style={{ color: "#dcdcaa" }}>let</span>{" "}
          <span style={{ color: "#ce9178" }}>
            Hobbies: <span style={{ color: "#800080" }}>HobbyType</span>
          </span>
          {" = {"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Build</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "Writing", "Filmmaking", "Woodworking"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Eat</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "Tacos", "Eggs & Bacon", "Grapefruit"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Love</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "Wife", "Family", "Puppies", "Friends"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Watch</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "Shameless", "Monk", "Mad Men", "The Office"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "2.4em", color: "#9cdcfe" }}>Listen</span>
          <span style={{ color: "#d4d4d4" }}>:</span>
          {" ["}
          <span style={{ color: "#cb4154" }}>
            "Gipsy Kings", "Drakeo The Ruler", "Johnny Cash", "Future"
          </span>
          {"],"}
          <br />
          <span style={{ marginLeft: "" }}>{"};"}</span>
        </h1>
      </div>
    </div>
  );
}
