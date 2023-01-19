import { Check } from "phosphor-react";
import React from "react";

type NewHabitFormProps = {};

export function NewHabitForm(props: NewHabitFormProps) {
  return (
    <form className="w-full flex flex-col mt-6">
      <label className="font-semibold leading-tight" htmlFor="title">
        Qual seu comprometimento?
      </label>

      <input
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        autoFocus
      />

      <label className="font-semibold leading-tight mt-4" htmlFor="">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
