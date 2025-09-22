"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    id: 1,
    question: "Jak často se cítíte vyčerpaní nebo bez energie?",
    options: [
      { text: "Téměř nikdy", score: 1 },
      { text: "Občas", score: 2 },
      { text: "Často", score: 3 },
      { text: "Téměř pořád", score: 4 }
    ]
  },
  {
    id: 2,
    question: "Jak moc vás limitují vaše strachy nebo úzkosti?",
    options: [
      { text: "Vůbec ne", score: 1 },
      { text: "Trochu", score: 2 },
      { text: "Značně", score: 3 },
      { text: "Velmi výrazně", score: 4 }
    ]
  },
  {
    id: 3,
    question: "Jak spokojeni jste se svými vztahy?",
    options: [
      { text: "Velmi spokojeni", score: 1 },
      { text: "Celkem spokojeni", score: 2 },
      { text: "Málo spokojeni", score: 3 },
      { text: "Velmi nespokojeni", score: 4 }
    ]
  },
  {
    id: 4,
    question: "Jak často máte pocit, že se nemůžete prosadit?",
    options: [
      { text: "Téměř nikdy", score: 1 },
      { text: "Občas", score: 2 },
      { text: "Často", score: 3 },
      { text: "Téměř vždy", score: 4 }
    ]
  }
]

const results = {
  low: {
    title: "Výborná psychická pohoda",
    description: "Vaše mentální zdraví je ve skvělém stavu. PSYCH-K® vám může pomoci udržet si tuto pohodu a ještě více rozvinout váš potenciál.",
    recommendation: "Preventivní sezení pro udržení rovnováhy",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  medium: {
    title: "Mírné výzvy",
    description: "Máte některé oblasti, které by mohly být lepší. PSYCH-K® vám může pomoci překonat tyto překážky a najít větší vnitřní klid.",
    recommendation: "3-5 sezení pro zlepšení problematických oblastí",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  high: {
    title: "Významné výzvy",
    description: "Čelíte několika oblastem, které výrazně ovlivňují kvalitu vašeho života. PSYCH-K® může být velmi účinným nástrojem pro vaši transformaci.",
    recommendation: "Intenzivní program 6-8 sezení",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  veryHigh: {
    title: "Potřeba okamžité podpory",
    description: "Vaše současná situace vyžaduje pozornost. PSYCH-K® vám může poskytnout rychlou úlevu a dlouhodobé řešení.",
    recommendation: "Urgentní konzultace + dlouhodobý program",
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
}

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getResult = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    const percentage = (totalScore / maxScore) * 100

    if (percentage <= 25) return results.low
    if (percentage <= 50) return results.medium
    if (percentage <= 75) return results.high
    return results.veryHigh
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setIsStarted(false)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (!isStarted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl mb-4">Rychlý test psychické pohody</CardTitle>
          <CardDescription className="text-lg">
            Zjistěte za 2 minuty, jak vám může PSYCH-K® pomoci
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={() => setIsStarted(true)}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Začít test
            </Button>
          </motion.div>
          <p className="text-sm text-muted-foreground mt-4">
            ✓ Anonymní • ✓ Bez registrace • ✓ Okamžité výsledky
          </p>
        </CardContent>
      </Card>
    )
  }

  if (showResult) {
    const result = getResult()
    const totalScore = answers.reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    const percentage = Math.round((totalScore / maxScore) * 100)

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className={`${result.bgColor} ${result.color} text-lg px-4 py-2 mb-4`}>
                Skóre: {percentage}%
              </Badge>
            </motion.div>
            <CardTitle className="text-2xl mb-2">{result.title}</CardTitle>
            <CardDescription className="text-lg">
              {result.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${result.bgColor} rounded-lg p-4`}
            >
              <h4 className="font-semibold mb-2">Doporučení:</h4>
              <p className={result.color}>{result.recommendation}</p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Rezervovat konzultaci
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={resetQuiz}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Zkusit znovu
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline">
            Otázka {currentQuestion + 1} z {questions.length}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}% dokončeno
          </span>
        </div>
        <Progress value={progress} className="mb-4" />
        <CardTitle className="text-xl">
          {questions[currentQuestion].question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleAnswer(option.score)}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-4 hover:bg-primary/5"
                >
                  {option.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}