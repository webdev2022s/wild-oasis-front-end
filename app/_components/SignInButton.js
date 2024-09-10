import github from "next-auth/providers/github";
import { signInAction } from "../_lib/action";

export default function SignInButton() {
  return (
    <div>
      <form action={signInAction}>
        <div className="mb-4">
          <button
            name="google"
            id="google"
            value={"google"}
            className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium hover:bg-blue-800"
          >
            <img
              className="h-8 w-8"
              alt="svgImgGoogle"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiI+PC9wYXRoPgo8L3N2Zz4="
            />
            <span>Sign in with Google</span>
          </button>
        </div>
        <div>
          <button
            name="github"
            id="github"
            value={"github"}
            defaultValue={"github"}
            className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium hover:bg-primary-700"
          >
            <img
              className="h-8 w-8"
              alt="svgImgGitHub"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCI+CjxwYXRoIGQ9Ik0zMiA2QzE3LjY0MSA2IDYgMTcuNjQxIDYgMzJjMCAxMi4yNzcgOC41MTIgMjIuNTYgMTkuOTU1IDI1LjI4Ni0uNTkyLS4xNDEtMS4xNzktLjI5OS0xLjc1NS0uNDc5VjUwLjg1YzAgMC0uOTc1LjMyNS0yLjI3NS4zMjUtMy42MzcgMC01LjE0OC0zLjI0NS01LjUyNS00Ljg3NS0uMjI5LS45OTMtLjgyNy0xLjkzNC0xLjQ2OS0yLjUwOS0uNzY3LS42ODQtMS4xMjYtLjY4Ni0xLjEzMS0uOTItLjAxLS40OTEuNjU4LS40NzEuOTc1LS40NzEgMS42MjUgMCAyLjg1NyAxLjcyOSAzLjQyOSAyLjYyMyAxLjQxNyAyLjIwNyAyLjkzOCAyLjU3NyAzLjcyMSAyLjU3Ny45NzUgMCAxLjgxNy0uMTQ2IDIuMzk3LS40MjYuMjY4LTEuODg4IDEuMTA4LTMuNTcgMi40NzgtNC43NzQtNi4wOTctMS4yMTktMTAuNC00LjcxNi0xMC40LTEwLjQgMC0yLjkyOCAxLjE3NS01LjYxOSAzLjEzMy03Ljc5MkMxOS4zMzMgMjMuNjQxIDE5IDIyLjQ5NCAxOSAyMC42MjVjMC0xLjIzNS4wODYtMi43NTEuNjUtNC4yMjUgMCAwIDMuNzA4LjAyNiA3LjIwNSAzLjMzOEMyOC40NjkgMTkuMjY4IDMwLjE5NiAxOSAzMiAxOXMzLjUzMS4yNjggNS4xNDUuNzM4YzMuNDk3LTMuMzEyIDcuMjA1LTMuMzM4IDcuMjA1LTMuMzM4LjU2NyAxLjQ3NC42NSAyLjk5LjY1IDQuMjI1IDAgMi4wMTUtLjI2OCAzLjE5LS40MzIgMy42OTdDNDYuNDY2IDI2LjQ3NSA0Ny42IDI5LjEyNCA0Ny42IDMyYzAgNS42ODQtNC4zMDMgOS4xODEtMTAuNCAxMC40IDEuNjI4IDEuNDMgMi42IDMuNTEzIDIuNiA1Ljg1djguNTU3Yy0uNTc2LjE4MS0xLjE2Mi4zMzgtMS43NTUuNDc5QzQ5LjQ4OCA1NC41NiA1OCA0NC4yNzcgNTggMzIgNTggMTcuNjQxIDQ2LjM1OSA2IDMyIDZ6TTMzLjgxMyA1Ny45M0MzMy4yMTQgNTcuOTcyIDMyLjYxIDU4IDMyIDU4IDMyLjYxIDU4IDMzLjIxMyA1Ny45NzEgMzMuODEzIDU3Ljkzek0zNy43ODYgNTcuMzQ2Yy0xLjE2NC4yNjUtMi4zNTcuNDUxLTMuNTc1LjU1NEMzNS40MjkgNTcuNzk3IDM2LjYyMiA1Ny42MSAzNy43ODYgNTcuMzQ2ek0zMiA1OGMtLjYxIDAtMS4yMTQtLjAyOC0xLjgxMy0uMDdDMzAuNzg3IDU3Ljk3MSAzMS4zOSA1OCAzMiA1OHpNMjkuNzg4IDU3LjljLTEuMjE3LS4xMDMtMi40MTEtLjI4OS0zLjU3NC0uNTU0QzI3LjM3OCA1Ny42MSAyOC41NzEgNTcuNzk3IDI5Ljc4OCA1Ny45eiI+PC9wYXRoPgo8L3N2Zz4="
            />
            <span>Sign in with GitHub</span>
          </button>
        </div>
      </form>
    </div>
  );
}
