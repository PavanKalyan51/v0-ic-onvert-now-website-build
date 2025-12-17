export function calculatePercentage(value: number, percentage: number): number {
  return (value * percentage) / 100
}

export function calculatePercentageOf(part: number, whole: number): number {
  if (whole === 0) return 0
  return (part / whole) * 100
}

export function calculatePercentageIncrease(oldValue: number, newValue: number): number {
  if (oldValue === 0) return 0
  return ((newValue - oldValue) / oldValue) * 100
}

export function calculateEMI(principal: number, annualRate: number, tenureMonths: number) {
  const monthlyRate = annualRate / 12 / 100
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1)

  const totalAmount = emi * tenureMonths
  const totalInterest = totalAmount - principal

  return {
    emi: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    principal,
  }
}

export function calculateBMI(weight: number, height: number): { bmi: number; category: string; healthy: string } {
  const bmi = weight / (height / 100) ** 2

  let category = ""
  let healthy = ""

  if (bmi < 18.5) {
    category = "Underweight"
    healthy = "Below healthy weight"
  } else if (bmi < 25) {
    category = "Normal"
    healthy = "Healthy weight"
  } else if (bmi < 30) {
    category = "Overweight"
    healthy = "Above healthy weight"
  } else {
    category = "Obese"
    healthy = "Well above healthy weight"
  }

  return { bmi: Math.round(bmi * 10) / 10, category, healthy }
}

export function calculateCompoundInterest(principal: number, rate: number, time: number, frequency = 1) {
  const amount = principal * Math.pow(1 + rate / (frequency * 100), frequency * time)
  const interest = amount - principal

  return {
    amount: Math.round(amount),
    interest: Math.round(interest),
    principal,
  }
}
