import { SpellsQuestionsWrapper } from "./styles"

export default function SpellsQuestions() {
  return (
    <SpellsQuestionsWrapper>
      <p><span className="verbal">Verbal</span>
        Exige entonação de palavras, você precisa estar podendo falar.
      </p>
      <p><span className="somatic">Somático</span>
        Exige gestos, você precisa ter ao menos uma mão livre.
      </p>
      <p><span className="material">Material</span>
        Requer materiais específicos.
      </p>
    </SpellsQuestionsWrapper>
  )
}