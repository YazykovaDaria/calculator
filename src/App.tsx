import { Label, TextInput } from "flowbite-react";

export default function App() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-24">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="small">Small input</Label>
                </div>
                <TextInput id="small" type="text" sizing="sm" />
            </div>

            <div className="absolute inset-0 size-full">
                <div className="relative h-full w-full select-none">
                    <img
                        className="absolute right-0 min-w-dvh dark:hidden"
                        alt="Pattern Light"
                        src="/pattern-light.svg"
                    />
                    <img
                        className="absolute right-0 hidden min-w-dvh dark:block"
                        alt="Pattern Dark"
                        src="/pattern-dark.svg"
                    />
                </div>
            </div>
        </main>
    );
}
